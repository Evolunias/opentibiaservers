import DragonBallLegendRulesKeywordPage, { generateMetadata } from './dragon-ball-legend-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendRulesKeywordPage />;
}
