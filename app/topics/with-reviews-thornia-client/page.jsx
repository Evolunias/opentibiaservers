import WithReviewsThorniaClientKeywordPage, { generateMetadata } from './with-reviews-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaClientKeywordPage />;
}
