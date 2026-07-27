import TopGunzodusWikiKeywordPage, { generateMetadata } from './top-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusWikiKeywordPage />;
}
