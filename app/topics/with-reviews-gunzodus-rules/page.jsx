import WithReviewsGunzodusRulesKeywordPage, { generateMetadata } from './with-reviews-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusRulesKeywordPage />;
}
