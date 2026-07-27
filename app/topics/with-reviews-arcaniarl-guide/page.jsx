import WithReviewsArcaniarlGuideKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlGuideKeywordPage />;
}
