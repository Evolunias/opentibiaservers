import OfficialGunzodusOtsKeywordPage, { generateMetadata } from './official-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusOtsKeywordPage />;
}
