import ActiveGunzodusClientKeywordPage, { generateMetadata } from './active-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusClientKeywordPage />;
}
