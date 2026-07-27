import OfficialDragonBallLegendServerKeywordPage, { generateMetadata } from './official-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDragonBallLegendServerKeywordPage />;
}
