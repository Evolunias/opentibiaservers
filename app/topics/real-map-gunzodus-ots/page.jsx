import RealMapGunzodusOtsKeywordPage, { generateMetadata } from './real-map-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusOtsKeywordPage />;
}
