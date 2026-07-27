import WithReviewsCanobDownloadKeywordPage, { generateMetadata } from './with-reviews-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobDownloadKeywordPage />;
}
