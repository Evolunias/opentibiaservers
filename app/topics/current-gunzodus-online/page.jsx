import CurrentGunzodusOnlineKeywordPage, { generateMetadata } from './current-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusOnlineKeywordPage />;
}
