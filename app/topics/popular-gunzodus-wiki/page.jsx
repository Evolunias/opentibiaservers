import PopularGunzodusWikiKeywordPage, { generateMetadata } from './popular-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusWikiKeywordPage />;
}
