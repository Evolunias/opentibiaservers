import RealMapGunzodusServerKeywordPage, { generateMetadata } from './real-map-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusServerKeywordPage />;
}
