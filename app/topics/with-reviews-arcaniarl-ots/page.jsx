import WithReviewsArcaniarlOtsKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlOtsKeywordPage />;
}
