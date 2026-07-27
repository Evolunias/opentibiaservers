import TopGunzodusPrivateServerKeywordPage, { generateMetadata } from './top-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusPrivateServerKeywordPage />;
}
