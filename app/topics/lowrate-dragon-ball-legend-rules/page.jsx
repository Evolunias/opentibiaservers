import LowrateDragonBallLegendRulesKeywordPage, { generateMetadata } from './lowrate-dragon-ball-legend-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDragonBallLegendRulesKeywordPage />;
}
