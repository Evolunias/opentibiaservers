import NewSeasonBlazeraOnlineKeywordPage, { generateMetadata } from './new-season-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraOnlineKeywordPage />;
}
