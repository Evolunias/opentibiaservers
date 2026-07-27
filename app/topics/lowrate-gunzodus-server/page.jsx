import LowrateGunzodusServerKeywordPage, { generateMetadata } from './lowrate-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusServerKeywordPage />;
}
