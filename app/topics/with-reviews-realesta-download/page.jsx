import WithReviewsRealestaDownloadKeywordPage, { generateMetadata } from './with-reviews-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRealestaDownloadKeywordPage />;
}
