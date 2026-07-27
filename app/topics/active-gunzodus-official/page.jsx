import ActiveGunzodusOfficialKeywordPage, { generateMetadata } from './active-gunzodus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusOfficialKeywordPage />;
}
