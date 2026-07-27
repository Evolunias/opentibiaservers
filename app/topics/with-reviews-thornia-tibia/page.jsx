import WithReviewsThorniaTibiaKeywordPage, { generateMetadata } from './with-reviews-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaTibiaKeywordPage />;
}
