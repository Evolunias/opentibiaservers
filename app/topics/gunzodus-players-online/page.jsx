import GunzodusPlayersOnlineKeywordPage, { generateMetadata } from './gunzodus-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusPlayersOnlineKeywordPage />;
}
