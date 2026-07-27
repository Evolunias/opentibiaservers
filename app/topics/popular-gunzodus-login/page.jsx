import PopularGunzodusLoginKeywordPage, { generateMetadata } from './popular-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusLoginKeywordPage />;
}
