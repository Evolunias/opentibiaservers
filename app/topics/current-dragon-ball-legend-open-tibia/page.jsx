import CurrentDragonBallLegendOpenTibiaKeywordPage, { generateMetadata } from './current-dragon-ball-legend-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDragonBallLegendOpenTibiaKeywordPage />;
}
