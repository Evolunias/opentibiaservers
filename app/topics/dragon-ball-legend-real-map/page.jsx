import DragonBallLegendRealMapKeywordPage, { generateMetadata } from './dragon-ball-legend-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendRealMapKeywordPage />;
}
