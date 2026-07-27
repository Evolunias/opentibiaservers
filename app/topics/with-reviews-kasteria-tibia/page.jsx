import WithReviewsKasteriaTibiaKeywordPage, { generateMetadata } from './with-reviews-kasteria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsKasteriaTibiaKeywordPage />;
}
