import CurrentDragonBallLegendOtsKeywordPage, { generateMetadata } from './current-dragon-ball-legend-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDragonBallLegendOtsKeywordPage />;
}
