import NewSeasonGunzodusServerKeywordPage, { generateMetadata } from './new-season-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusServerKeywordPage />;
}
