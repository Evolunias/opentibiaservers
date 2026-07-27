import WithReviewsNepreniaOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNepreniaOpenTibiaKeywordPage />;
}
