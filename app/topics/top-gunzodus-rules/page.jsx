import TopGunzodusRulesKeywordPage, { generateMetadata } from './top-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusRulesKeywordPage />;
}
