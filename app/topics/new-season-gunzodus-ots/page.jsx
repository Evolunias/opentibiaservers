import NewSeasonGunzodusOtsKeywordPage, { generateMetadata } from './new-season-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusOtsKeywordPage />;
}
