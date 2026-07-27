import CustomGunzodusLoginKeywordPage, { generateMetadata } from './custom-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusLoginKeywordPage />;
}
