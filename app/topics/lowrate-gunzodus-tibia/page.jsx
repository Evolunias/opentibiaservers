import LowrateGunzodusTibiaKeywordPage, { generateMetadata } from './lowrate-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusTibiaKeywordPage />;
}
