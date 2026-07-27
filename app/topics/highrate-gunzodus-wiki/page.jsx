import HighrateGunzodusWikiKeywordPage, { generateMetadata } from './highrate-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusWikiKeywordPage />;
}
