import HighrateGunzodusServerKeywordPage, { generateMetadata } from './highrate-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusServerKeywordPage />;
}
