import WithReviewsKasteriaDownloadKeywordPage, { generateMetadata } from './with-reviews-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaDownloadKeywordPage />;
}
