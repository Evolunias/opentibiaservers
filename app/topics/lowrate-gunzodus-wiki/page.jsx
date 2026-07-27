import LowrateGunzodusWikiKeywordPage, { generateMetadata } from './lowrate-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusWikiKeywordPage />;
}
