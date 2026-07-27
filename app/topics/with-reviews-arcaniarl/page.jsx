import WithReviewsArcaniarlKeywordPage, { generateMetadata } from './with-reviews-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlKeywordPage />;
}
