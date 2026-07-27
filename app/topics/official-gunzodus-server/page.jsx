import OfficialGunzodusServerKeywordPage, { generateMetadata } from './official-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusServerKeywordPage />;
}
