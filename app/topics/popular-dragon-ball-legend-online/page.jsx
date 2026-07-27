import PopularDragonBallLegendOnlineKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendOnlineKeywordPage />;
}
