import RealMapGunzodusOnlineKeywordPage, { generateMetadata } from './real-map-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusOnlineKeywordPage />;
}
