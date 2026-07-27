import WithReviewsDragonBallLegendWikiKeywordPage, { generateMetadata } from './with-reviews-dragon-ball-legend-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsDragonBallLegendWikiKeywordPage />;
}
