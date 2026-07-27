import BestGunzodusOnlineKeywordPage, { generateMetadata } from './best-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusOnlineKeywordPage />;
}
