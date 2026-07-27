import WithReviewsKasteriaOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaOpenTibiaKeywordPage />;
}
