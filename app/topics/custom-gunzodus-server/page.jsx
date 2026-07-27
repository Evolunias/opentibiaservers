import CustomGunzodusServerKeywordPage, { generateMetadata } from './custom-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusServerKeywordPage />;
}
