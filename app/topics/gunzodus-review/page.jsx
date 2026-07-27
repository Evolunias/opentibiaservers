import GunzodusReviewKeywordPage, { generateMetadata } from './gunzodus-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusReviewKeywordPage />;
}
