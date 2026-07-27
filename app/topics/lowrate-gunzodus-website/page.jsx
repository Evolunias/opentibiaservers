import LowrateGunzodusWebsiteKeywordPage, { generateMetadata } from './lowrate-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusWebsiteKeywordPage />;
}
