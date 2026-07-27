import DragonBallLegendChileServerKeywordPage, { generateMetadata } from './dragon-ball-legend-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendChileServerKeywordPage />;
}
