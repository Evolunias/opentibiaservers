import OfficialGunzodusClientKeywordPage, { generateMetadata } from './official-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusClientKeywordPage />;
}
