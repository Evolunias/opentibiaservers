import ActiveGunzodusOpenTibiaKeywordPage, { generateMetadata } from './active-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusOpenTibiaKeywordPage />;
}
