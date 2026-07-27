import WithReviewsNilotTibiaKeywordPage, { generateMetadata } from './with-reviews-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNilotTibiaKeywordPage />;
}
