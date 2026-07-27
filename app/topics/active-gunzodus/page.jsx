import ActiveGunzodusKeywordPage, { generateMetadata } from './active-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusKeywordPage />;
}
