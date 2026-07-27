import PopularGunzodusOfficialKeywordPage, { generateMetadata } from './popular-gunzodus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusOfficialKeywordPage />;
}
