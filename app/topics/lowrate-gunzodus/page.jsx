import LowrateGunzodusKeywordPage, { generateMetadata } from './lowrate-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusKeywordPage />;
}
