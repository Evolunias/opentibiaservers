import OldSchoolSaintsotDownloadKeywordPage, { generateMetadata } from './old-school-saintsot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotDownloadKeywordPage />;
}
