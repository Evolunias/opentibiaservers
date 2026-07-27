import WithReviewsImperianicClientKeywordPage, { generateMetadata } from './with-reviews-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicClientKeywordPage />;
}
