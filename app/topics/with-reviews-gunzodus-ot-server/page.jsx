import WithReviewsGunzodusOtServerKeywordPage, { generateMetadata } from './with-reviews-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusOtServerKeywordPage />;
}
