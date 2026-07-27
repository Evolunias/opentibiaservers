import NoResetGunzodusRulesKeywordPage, { generateMetadata } from './no-reset-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGunzodusRulesKeywordPage />;
}
