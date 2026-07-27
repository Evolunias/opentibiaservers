import ActiveGunzodusOtServerKeywordPage, { generateMetadata } from './active-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusOtServerKeywordPage />;
}
