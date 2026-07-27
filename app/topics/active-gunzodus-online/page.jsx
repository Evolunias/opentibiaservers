import ActiveGunzodusOnlineKeywordPage, { generateMetadata } from './active-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusOnlineKeywordPage />;
}
