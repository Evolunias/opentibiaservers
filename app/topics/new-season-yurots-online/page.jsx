import NewSeasonYurotsOnlineKeywordPage, { generateMetadata } from './new-season-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsOnlineKeywordPage />;
}
