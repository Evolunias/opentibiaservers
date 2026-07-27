import TopGunzodusClientKeywordPage, { generateMetadata } from './top-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusClientKeywordPage />;
}
