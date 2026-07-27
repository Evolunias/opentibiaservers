import OldSchoolNilotDownloadKeywordPage, { generateMetadata } from './old-school-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotDownloadKeywordPage />;
}
