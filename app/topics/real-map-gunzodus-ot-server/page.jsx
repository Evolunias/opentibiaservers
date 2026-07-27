import RealMapGunzodusOtServerKeywordPage, { generateMetadata } from './real-map-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusOtServerKeywordPage />;
}
