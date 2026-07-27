import WithReviewsThaisotTibiaKeywordPage, { generateMetadata } from './with-reviews-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotTibiaKeywordPage />;
}
