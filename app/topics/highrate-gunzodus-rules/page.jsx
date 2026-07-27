import HighrateGunzodusRulesKeywordPage, { generateMetadata } from './highrate-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusRulesKeywordPage />;
}
