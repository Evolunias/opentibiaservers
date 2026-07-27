import WithReviewsArcaniarlTibiaKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlTibiaKeywordPage />;
}
