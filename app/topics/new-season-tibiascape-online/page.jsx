import NewSeasonTibiascapeOnlineKeywordPage, { generateMetadata } from './new-season-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeOnlineKeywordPage />;
}
