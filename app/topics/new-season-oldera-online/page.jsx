import NewSeasonOlderaOnlineKeywordPage, { generateMetadata } from './new-season-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaOnlineKeywordPage />;
}
