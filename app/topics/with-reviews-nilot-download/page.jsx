import WithReviewsNilotDownloadKeywordPage, { generateMetadata } from './with-reviews-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotDownloadKeywordPage />;
}
