import DragonBallLegendUsaServerKeywordPage, { generateMetadata } from './dragon-ball-legend-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendUsaServerKeywordPage />;
}
