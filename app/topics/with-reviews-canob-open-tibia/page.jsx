import WithReviewsCanobOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobOpenTibiaKeywordPage />;
}
