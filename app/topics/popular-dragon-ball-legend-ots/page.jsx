import PopularDragonBallLegendOtsKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendOtsKeywordPage />;
}
