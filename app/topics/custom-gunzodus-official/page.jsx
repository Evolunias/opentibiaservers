import CustomGunzodusOfficialKeywordPage, { generateMetadata } from './custom-gunzodus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusOfficialKeywordPage />;
}
