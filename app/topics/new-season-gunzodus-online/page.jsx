import NewSeasonGunzodusOnlineKeywordPage, { generateMetadata } from './new-season-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusOnlineKeywordPage />;
}
