import CurrentGunzodusOfficialKeywordPage, { generateMetadata } from './current-gunzodus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusOfficialKeywordPage />;
}
