import NewSeasonNepreniaOnlineKeywordPage, { generateMetadata } from './new-season-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaOnlineKeywordPage />;
}
