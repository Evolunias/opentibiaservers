import PopularGunzodusRulesKeywordPage, { generateMetadata } from './popular-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusRulesKeywordPage />;
}
