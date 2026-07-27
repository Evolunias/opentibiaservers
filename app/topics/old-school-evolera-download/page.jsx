import OldSchoolEvoleraDownloadKeywordPage, { generateMetadata } from './old-school-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraDownloadKeywordPage />;
}
