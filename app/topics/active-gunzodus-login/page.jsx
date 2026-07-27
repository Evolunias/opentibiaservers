import ActiveGunzodusLoginKeywordPage, { generateMetadata } from './active-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusLoginKeywordPage />;
}
