import PvpDragonBallLegendServerKeywordPage, { generateMetadata } from './pvp-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDragonBallLegendServerKeywordPage />;
}
