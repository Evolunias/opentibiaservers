import TopGunzodusServerKeywordPage, { generateMetadata } from './top-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusServerKeywordPage />;
}
