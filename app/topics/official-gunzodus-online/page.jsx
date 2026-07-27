import OfficialGunzodusOnlineKeywordPage, { generateMetadata } from './official-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusOnlineKeywordPage />;
}
