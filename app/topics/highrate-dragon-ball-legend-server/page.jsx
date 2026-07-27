import HighrateDragonBallLegendServerKeywordPage, { generateMetadata } from './highrate-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDragonBallLegendServerKeywordPage />;
}
