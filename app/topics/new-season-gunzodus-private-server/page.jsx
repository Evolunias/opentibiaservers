import NewSeasonGunzodusPrivateServerKeywordPage, { generateMetadata } from './new-season-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusPrivateServerKeywordPage />;
}
