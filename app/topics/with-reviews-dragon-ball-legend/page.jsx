import WithReviewsDragonBallLegendKeywordPage, { generateMetadata } from './with-reviews-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDragonBallLegendKeywordPage />;
}
