import DragonBallLegendPrivateServerKeywordPage, { generateMetadata } from './dragon-ball-legend-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendPrivateServerKeywordPage />;
}
