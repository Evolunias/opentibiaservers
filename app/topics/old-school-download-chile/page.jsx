import OldSchoolDownloadChileKeywordPage, { generateMetadata } from './old-school-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDownloadChileKeywordPage />;
}
