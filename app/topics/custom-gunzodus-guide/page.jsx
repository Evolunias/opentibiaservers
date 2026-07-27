import CustomGunzodusGuideKeywordPage, { generateMetadata } from './custom-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusGuideKeywordPage />;
}
