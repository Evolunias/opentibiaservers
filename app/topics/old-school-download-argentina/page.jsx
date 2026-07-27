import OldSchoolDownloadArgentinaKeywordPage, { generateMetadata } from './old-school-download-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadArgentinaKeywordPage />;
}
