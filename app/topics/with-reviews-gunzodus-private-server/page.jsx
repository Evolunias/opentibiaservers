import WithReviewsGunzodusPrivateServerKeywordPage, { generateMetadata } from './with-reviews-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusPrivateServerKeywordPage />;
}
