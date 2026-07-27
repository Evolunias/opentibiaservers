import WithReviewsNepreniaKeywordPage, { generateMetadata } from './with-reviews-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaKeywordPage />;
}
