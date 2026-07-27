import WithReviewsArcaniarlClientKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlClientKeywordPage />;
}
