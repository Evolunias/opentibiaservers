import CurrentDragonBallLegendClientKeywordPage, { generateMetadata } from './current-dragon-ball-legend-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDragonBallLegendClientKeywordPage />;
}
