import WithReviewsNtoStarTibiaKeywordPage, { generateMetadata } from './with-reviews-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarTibiaKeywordPage />;
}
