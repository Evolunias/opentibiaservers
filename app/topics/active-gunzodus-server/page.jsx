import ActiveGunzodusServerKeywordPage, { generateMetadata } from './active-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusServerKeywordPage />;
}
