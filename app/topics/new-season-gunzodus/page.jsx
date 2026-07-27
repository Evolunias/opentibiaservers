import NewSeasonGunzodusKeywordPage, { generateMetadata } from './new-season-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusKeywordPage />;
}
