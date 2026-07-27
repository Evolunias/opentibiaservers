import OfficialGunzodusRulesKeywordPage, { generateMetadata } from './official-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusRulesKeywordPage />;
}
