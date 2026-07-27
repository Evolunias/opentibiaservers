import NewSeasonGunzodusWebsiteKeywordPage, { generateMetadata } from './new-season-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusWebsiteKeywordPage />;
}
