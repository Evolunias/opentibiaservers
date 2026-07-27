import ActiveGunzodusRulesKeywordPage, { generateMetadata } from './active-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusRulesKeywordPage />;
}
