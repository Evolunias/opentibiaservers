import BaiakDownloadChileKeywordPage, { generateMetadata } from './baiak-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadChileKeywordPage />;
}
