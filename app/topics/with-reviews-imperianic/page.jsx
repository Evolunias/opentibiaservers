import WithReviewsImperianicKeywordPage, { generateMetadata } from './with-reviews-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicKeywordPage />;
}
