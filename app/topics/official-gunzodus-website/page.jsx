import OfficialGunzodusWebsiteKeywordPage, { generateMetadata } from './official-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusWebsiteKeywordPage />;
}
