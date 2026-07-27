import WithReviewsArcaniarlWebsiteKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlWebsiteKeywordPage />;
}
