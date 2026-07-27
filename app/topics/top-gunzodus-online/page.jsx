import TopGunzodusOnlineKeywordPage, { generateMetadata } from './top-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusOnlineKeywordPage />;
}
