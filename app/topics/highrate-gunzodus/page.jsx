import HighrateGunzodusKeywordPage, { generateMetadata } from './highrate-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusKeywordPage />;
}
