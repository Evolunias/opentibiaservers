import OfficialGunzodusOfficialKeywordPage, { generateMetadata } from './official-gunzodus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusOfficialKeywordPage />;
}
