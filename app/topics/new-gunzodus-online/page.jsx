import NewGunzodusOnlineKeywordPage, { generateMetadata } from './new-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusOnlineKeywordPage />;
}
