import RealMapGunzodusServersKeywordPage, { generateMetadata } from './real-map-gunzodus-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusServersKeywordPage />;
}
