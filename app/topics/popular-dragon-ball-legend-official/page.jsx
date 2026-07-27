import PopularDragonBallLegendOfficialKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendOfficialKeywordPage />;
}
