import WithReviewsArcaniarlLoginKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlLoginKeywordPage />;
}
