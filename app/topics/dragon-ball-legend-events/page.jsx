import DragonBallLegendEventsKeywordPage, { generateMetadata } from './dragon-ball-legend-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendEventsKeywordPage />;
}
