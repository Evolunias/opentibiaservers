import WithReviewsArcaniarlOtServerKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlOtServerKeywordPage />;
}
