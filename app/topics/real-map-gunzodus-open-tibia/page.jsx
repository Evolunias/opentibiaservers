import RealMapGunzodusOpenTibiaKeywordPage, { generateMetadata } from './real-map-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusOpenTibiaKeywordPage />;
}
