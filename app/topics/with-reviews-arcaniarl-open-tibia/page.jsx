import WithReviewsArcaniarlOpenTibiaKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlOpenTibiaKeywordPage />;
}
