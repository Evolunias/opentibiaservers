import WithReviewsEvoleraTibiaKeywordPage, { generateMetadata } from './with-reviews-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoleraTibiaKeywordPage />;
}
