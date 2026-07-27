import WithReviewsServersEuropeKeywordPage, { generateMetadata } from './with-reviews-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsServersEuropeKeywordPage />;
}
