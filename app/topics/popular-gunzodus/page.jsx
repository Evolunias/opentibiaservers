import PopularGunzodusKeywordPage, { generateMetadata } from './popular-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusKeywordPage />;
}
