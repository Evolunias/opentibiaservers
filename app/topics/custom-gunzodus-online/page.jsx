import CustomGunzodusOnlineKeywordPage, { generateMetadata } from './custom-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusOnlineKeywordPage />;
}
