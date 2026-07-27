import RealMapDragonBallLegendKeywordPage, { generateMetadata } from './real-map-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDragonBallLegendKeywordPage />;
}
