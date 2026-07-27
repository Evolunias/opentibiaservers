import CurrentDragonBallLegendOtServerKeywordPage, { generateMetadata } from './current-dragon-ball-legend-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDragonBallLegendOtServerKeywordPage />;
}
