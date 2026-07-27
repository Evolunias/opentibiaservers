import CustomDragonBallLegendOnlineKeywordPage, { generateMetadata } from './custom-dragon-ball-legend-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDragonBallLegendOnlineKeywordPage />;
}
