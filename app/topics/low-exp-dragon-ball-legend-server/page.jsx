import LowExpDragonBallLegendServerKeywordPage, { generateMetadata } from './low-exp-dragon-ball-legend-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDragonBallLegendServerKeywordPage />;
}
