import ActiveGunzodusRegisterKeywordPage, { generateMetadata } from './active-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusRegisterKeywordPage />;
}
