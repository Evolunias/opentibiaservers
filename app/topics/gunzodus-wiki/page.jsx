import GunzodusWikiKeywordPage, { generateMetadata } from './gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusWikiKeywordPage />;
}
