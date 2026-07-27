import TibiantisPlayersOnlineKeywordPage, { generateMetadata } from './tibiantis-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisPlayersOnlineKeywordPage />;
}
