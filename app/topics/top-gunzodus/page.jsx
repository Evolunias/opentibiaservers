import TopGunzodusKeywordPage, { generateMetadata } from './top-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusKeywordPage />;
}
