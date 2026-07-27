import CurrentGunzodusRulesKeywordPage, { generateMetadata } from './current-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusRulesKeywordPage />;
}
