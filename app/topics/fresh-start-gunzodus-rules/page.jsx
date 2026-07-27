import FreshStartGunzodusRulesKeywordPage, { generateMetadata } from './fresh-start-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGunzodusRulesKeywordPage />;
}
