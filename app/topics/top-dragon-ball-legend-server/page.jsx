import TopDragonBallLegendServerKeywordPage, { generateMetadata } from './top-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDragonBallLegendServerKeywordPage />;
}
