import WithReviewsDownloadChileKeywordPage, { generateMetadata } from './with-reviews-download-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDownloadChileKeywordPage />;
}
