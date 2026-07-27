import RealMapGunzodusTibiaKeywordPage, { generateMetadata } from './real-map-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusTibiaKeywordPage />;
}
