import LowrateGunzodusRulesKeywordPage, { generateMetadata } from './lowrate-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusRulesKeywordPage />;
}
