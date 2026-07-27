import OfficialDragonBallLegendOtsKeywordPage, { generateMetadata } from './official-dragon-ball-legend-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDragonBallLegendOtsKeywordPage />;
}
