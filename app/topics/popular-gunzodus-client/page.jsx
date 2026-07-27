import PopularGunzodusClientKeywordPage, { generateMetadata } from './popular-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusClientKeywordPage />;
}
