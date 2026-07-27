import OfficialDragonBallLegendKeywordPage, { generateMetadata } from './official-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDragonBallLegendKeywordPage />;
}
