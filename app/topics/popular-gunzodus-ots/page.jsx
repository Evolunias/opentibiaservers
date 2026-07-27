import PopularGunzodusOtsKeywordPage, { generateMetadata } from './popular-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusOtsKeywordPage />;
}
