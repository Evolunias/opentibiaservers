import DragonBallLegendMapKeywordPage, { generateMetadata } from './dragon-ball-legend-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendMapKeywordPage />;
}
