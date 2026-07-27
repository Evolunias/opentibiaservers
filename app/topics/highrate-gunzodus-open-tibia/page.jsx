import HighrateGunzodusOpenTibiaKeywordPage, { generateMetadata } from './highrate-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusOpenTibiaKeywordPage />;
}
