import PopularGunzodusOpenTibiaKeywordPage, { generateMetadata } from './popular-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusOpenTibiaKeywordPage />;
}
