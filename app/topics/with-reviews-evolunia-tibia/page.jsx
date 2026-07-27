import WithReviewsEvoluniaTibiaKeywordPage, { generateMetadata } from './with-reviews-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaTibiaKeywordPage />;
}
