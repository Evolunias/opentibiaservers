import TopGunzodusWebsiteKeywordPage, { generateMetadata } from './top-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusWebsiteKeywordPage />;
}
