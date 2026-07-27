import GunzodusWithReviewsServerSwedenKeywordPage, { generateMetadata } from './gunzodus-with-reviews-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusWithReviewsServerSwedenKeywordPage />;
}
