import GunzodusReviewsKeywordPage, { generateMetadata } from './gunzodus-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusReviewsKeywordPage />;
}
