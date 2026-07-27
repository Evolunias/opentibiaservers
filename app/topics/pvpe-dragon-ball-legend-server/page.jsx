import PvpeDragonBallLegendServerKeywordPage, { generateMetadata } from './pvpe-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDragonBallLegendServerKeywordPage />;
}
