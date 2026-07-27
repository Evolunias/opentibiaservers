import CustomGunzodusKeywordPage, { generateMetadata } from './custom-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusKeywordPage />;
}
