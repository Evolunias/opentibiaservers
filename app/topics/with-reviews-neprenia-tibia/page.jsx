import WithReviewsNepreniaTibiaKeywordPage, { generateMetadata } from './with-reviews-neprenia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaTibiaKeywordPage />;
}
