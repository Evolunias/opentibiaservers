import WithReviewsArcaniarlPrivateServerKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlPrivateServerKeywordPage />;
}
