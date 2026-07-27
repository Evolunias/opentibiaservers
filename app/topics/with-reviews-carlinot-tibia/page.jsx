import WithReviewsCarlinotTibiaKeywordPage, { generateMetadata } from './with-reviews-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCarlinotTibiaKeywordPage />;
}
