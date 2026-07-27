import WithReviewsThaisotDownloadKeywordPage, { generateMetadata } from './with-reviews-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotDownloadKeywordPage />;
}
