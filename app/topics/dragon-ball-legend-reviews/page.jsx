import DragonBallLegendReviewsKeywordPage, { generateMetadata } from './dragon-ball-legend-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendReviewsKeywordPage />;
}
