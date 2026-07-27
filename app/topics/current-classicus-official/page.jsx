import CurrentClassicusOfficialKeywordPage, { generateMetadata } from './current-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusOfficialKeywordPage />;
}
