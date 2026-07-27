import RealMapGunzodusKeywordPage, { generateMetadata } from './real-map-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusKeywordPage />;
}
