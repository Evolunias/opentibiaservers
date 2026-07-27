import OldSchoolTibianusDownloadKeywordPage, { generateMetadata } from './old-school-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusDownloadKeywordPage />;
}
