import LowrateGunzodusClientKeywordPage, { generateMetadata } from './lowrate-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusClientKeywordPage />;
}
