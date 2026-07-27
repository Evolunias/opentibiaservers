import CurrentGunzodusOpenTibiaKeywordPage, { generateMetadata } from './current-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusOpenTibiaKeywordPage />;
}
