import HighrateGunzodusOtServerKeywordPage, { generateMetadata } from './highrate-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusOtServerKeywordPage />;
}
