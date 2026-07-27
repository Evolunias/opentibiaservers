import NewSeasonTibiaraOnlineKeywordPage, { generateMetadata } from './new-season-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraOnlineKeywordPage />;
}
