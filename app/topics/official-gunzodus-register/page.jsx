import OfficialGunzodusRegisterKeywordPage, { generateMetadata } from './official-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusRegisterKeywordPage />;
}
