import RealestaWithReviewsServerEuropeKeywordPage, { generateMetadata } from './realesta-with-reviews-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaWithReviewsServerEuropeKeywordPage />;
}
