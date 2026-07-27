import HighrateGunzodusWebsiteKeywordPage, { generateMetadata } from './highrate-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusWebsiteKeywordPage />;
}
