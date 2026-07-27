import SeasonalDragonBallLegendServerKeywordPage, { generateMetadata } from './seasonal-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDragonBallLegendServerKeywordPage />;
}
