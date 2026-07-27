import ActiveDragonBallLegendClientKeywordPage, { generateMetadata } from './active-dragon-ball-legend-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDragonBallLegendClientKeywordPage />;
}
