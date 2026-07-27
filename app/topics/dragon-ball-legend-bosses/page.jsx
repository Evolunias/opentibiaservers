import DragonBallLegendBossesKeywordPage, { generateMetadata } from './dragon-ball-legend-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendBossesKeywordPage />;
}
