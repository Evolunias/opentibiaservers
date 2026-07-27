import PopularGunzodusServerKeywordPage, { generateMetadata } from './popular-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusServerKeywordPage />;
}
