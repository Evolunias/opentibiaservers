import OldSchoolUnlineDownloadKeywordPage, { generateMetadata } from './old-school-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineDownloadKeywordPage />;
}
