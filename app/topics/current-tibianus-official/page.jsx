import CurrentTibianusOfficialKeywordPage, { generateMetadata } from './current-tibianus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusOfficialKeywordPage />;
}
