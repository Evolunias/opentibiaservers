import FreshStartDownloadChileKeywordPage, { generateMetadata } from './fresh-start-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDownloadChileKeywordPage />;
}
