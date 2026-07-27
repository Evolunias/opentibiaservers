import WithReviewsThaisotOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThaisotOpenTibiaKeywordPage />;
}
