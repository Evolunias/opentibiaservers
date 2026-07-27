import TopGunzodusOtsKeywordPage, { generateMetadata } from './top-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusOtsKeywordPage />;
}
