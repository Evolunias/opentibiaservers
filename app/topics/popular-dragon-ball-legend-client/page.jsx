import PopularDragonBallLegendClientKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendClientKeywordPage />;
}
