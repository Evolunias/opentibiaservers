import NewSeasonGunzodusLoginKeywordPage, { generateMetadata } from './new-season-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusLoginKeywordPage />;
}
