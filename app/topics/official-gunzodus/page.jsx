import OfficialGunzodusKeywordPage, { generateMetadata } from './official-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusKeywordPage />;
}
