import NewClassicusOfficialKeywordPage, { generateMetadata } from './new-classicus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusOfficialKeywordPage />;
}
