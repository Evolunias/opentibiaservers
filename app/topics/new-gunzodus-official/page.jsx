import NewGunzodusOfficialKeywordPage, { generateMetadata } from './new-gunzodus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusOfficialKeywordPage />;
}
