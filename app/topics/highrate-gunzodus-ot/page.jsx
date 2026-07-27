import HighrateGunzodusOtKeywordPage, { generateMetadata } from './highrate-gunzodus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusOtKeywordPage />;
}
