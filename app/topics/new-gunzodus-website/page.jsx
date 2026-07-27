import NewGunzodusWebsiteKeywordPage, { generateMetadata } from './new-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusWebsiteKeywordPage />;
}
