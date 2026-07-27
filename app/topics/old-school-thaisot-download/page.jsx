import OldSchoolThaisotDownloadKeywordPage, { generateMetadata } from './old-school-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotDownloadKeywordPage />;
}
