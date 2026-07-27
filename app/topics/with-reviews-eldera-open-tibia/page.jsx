import WithReviewsElderaOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaOpenTibiaKeywordPage />;
}
