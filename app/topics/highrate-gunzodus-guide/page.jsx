import HighrateGunzodusGuideKeywordPage, { generateMetadata } from './highrate-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusGuideKeywordPage />;
}
