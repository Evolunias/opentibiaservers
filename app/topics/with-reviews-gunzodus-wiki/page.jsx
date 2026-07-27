import WithReviewsGunzodusWikiKeywordPage, { generateMetadata } from './with-reviews-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusWikiKeywordPage />;
}
