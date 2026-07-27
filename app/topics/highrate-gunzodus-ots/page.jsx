import HighrateGunzodusOtsKeywordPage, { generateMetadata } from './highrate-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusOtsKeywordPage />;
}
