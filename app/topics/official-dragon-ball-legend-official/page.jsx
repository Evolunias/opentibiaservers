import OfficialDragonBallLegendOfficialKeywordPage, { generateMetadata } from './official-dragon-ball-legend-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDragonBallLegendOfficialKeywordPage />;
}
