import OfficialGunzodusTibiaKeywordPage, { generateMetadata } from './official-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusTibiaKeywordPage />;
}
