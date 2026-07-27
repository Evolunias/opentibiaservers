import PopularDragonBallLegendOpenTibiaKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendOpenTibiaKeywordPage />;
}
