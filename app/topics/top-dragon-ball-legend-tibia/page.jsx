import TopDragonBallLegendTibiaKeywordPage, { generateMetadata } from './top-dragon-ball-legend-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDragonBallLegendTibiaKeywordPage />;
}
