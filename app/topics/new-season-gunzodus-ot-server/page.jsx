import NewSeasonGunzodusOtServerKeywordPage, { generateMetadata } from './new-season-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusOtServerKeywordPage />;
}
