import OfficialDragonBallLegendLoginKeywordPage, { generateMetadata } from './official-dragon-ball-legend-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDragonBallLegendLoginKeywordPage />;
}
