import ActiveDragonBallLegendLoginKeywordPage, { generateMetadata } from './active-dragon-ball-legend-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDragonBallLegendLoginKeywordPage />;
}
