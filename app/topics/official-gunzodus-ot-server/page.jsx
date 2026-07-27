import OfficialGunzodusOtServerKeywordPage, { generateMetadata } from './official-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusOtServerKeywordPage />;
}
