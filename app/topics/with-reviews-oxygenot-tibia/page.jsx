import WithReviewsOxygenotTibiaKeywordPage, { generateMetadata } from './with-reviews-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsOxygenotTibiaKeywordPage />;
}
