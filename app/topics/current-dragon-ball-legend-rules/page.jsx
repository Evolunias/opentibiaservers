import CurrentDragonBallLegendRulesKeywordPage, { generateMetadata } from './current-dragon-ball-legend-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDragonBallLegendRulesKeywordPage />;
}
