import WithReviewsGunzodusOnlineKeywordPage, { generateMetadata } from './with-reviews-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusOnlineKeywordPage />;
}
