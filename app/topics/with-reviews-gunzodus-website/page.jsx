import WithReviewsGunzodusWebsiteKeywordPage, { generateMetadata } from './with-reviews-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusWebsiteKeywordPage />;
}
