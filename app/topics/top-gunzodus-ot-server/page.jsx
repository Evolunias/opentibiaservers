import TopGunzodusOtServerKeywordPage, { generateMetadata } from './top-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusOtServerKeywordPage />;
}
