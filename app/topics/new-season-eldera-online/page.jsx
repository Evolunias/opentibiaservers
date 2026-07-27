import NewSeasonElderaOnlineKeywordPage, { generateMetadata } from './new-season-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaOnlineKeywordPage />;
}
