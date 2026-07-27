import WithReviewsArcaniarlServerKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlServerKeywordPage />;
}
