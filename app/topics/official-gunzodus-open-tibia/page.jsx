import OfficialGunzodusOpenTibiaKeywordPage, { generateMetadata } from './official-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusOpenTibiaKeywordPage />;
}
