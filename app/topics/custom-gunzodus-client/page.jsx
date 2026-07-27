import CustomGunzodusClientKeywordPage, { generateMetadata } from './custom-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusClientKeywordPage />;
}
