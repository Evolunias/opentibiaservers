import NewDragonBallLegendServerKeywordPage, { generateMetadata } from './new-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendServerKeywordPage />;
}
