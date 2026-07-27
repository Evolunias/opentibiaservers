import LowrateGunzodusOtsKeywordPage, { generateMetadata } from './lowrate-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusOtsKeywordPage />;
}
