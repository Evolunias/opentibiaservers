import CustomGunzodusOtsKeywordPage, { generateMetadata } from './custom-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusOtsKeywordPage />;
}
