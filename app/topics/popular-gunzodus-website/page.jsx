import PopularGunzodusWebsiteKeywordPage, { generateMetadata } from './popular-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusWebsiteKeywordPage />;
}
