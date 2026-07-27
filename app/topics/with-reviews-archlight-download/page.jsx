import WithReviewsArchlightDownloadKeywordPage, { generateMetadata } from './with-reviews-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightDownloadKeywordPage />;
}
