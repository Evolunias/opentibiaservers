import WithReviewsGunzodusTibiaKeywordPage, { generateMetadata } from './with-reviews-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusTibiaKeywordPage />;
}
