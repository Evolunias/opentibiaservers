import OldSchoolMarolaotDownloadKeywordPage, { generateMetadata } from './old-school-marolaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotDownloadKeywordPage />;
}
