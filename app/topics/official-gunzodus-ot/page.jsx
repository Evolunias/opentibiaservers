import OfficialGunzodusOtKeywordPage, { generateMetadata } from './official-gunzodus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusOtKeywordPage />;
}
