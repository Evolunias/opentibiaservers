import GunzodusWithReviewsServerChileKeywordPage, { generateMetadata } from './gunzodus-with-reviews-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusWithReviewsServerChileKeywordPage />;
}
