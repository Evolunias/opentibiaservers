import DragonBallLegendFranceServerKeywordPage, { generateMetadata } from './dragon-ball-legend-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendFranceServerKeywordPage />;
}
