import WithReviewsNilotServerKeywordPage, { generateMetadata } from './with-reviews-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotServerKeywordPage />;
}
