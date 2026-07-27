import OldSchoolBlazeraDownloadKeywordPage, { generateMetadata } from './old-school-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraDownloadKeywordPage />;
}
