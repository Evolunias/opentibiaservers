import TopGunzodusOpenTibiaKeywordPage, { generateMetadata } from './top-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusOpenTibiaKeywordPage />;
}
