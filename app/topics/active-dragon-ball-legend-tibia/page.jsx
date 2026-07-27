import ActiveDragonBallLegendTibiaKeywordPage, { generateMetadata } from './active-dragon-ball-legend-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDragonBallLegendTibiaKeywordPage />;
}
