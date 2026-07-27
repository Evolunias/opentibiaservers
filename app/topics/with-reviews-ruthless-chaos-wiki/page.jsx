import WithReviewsRuthlessChaosWikiKeywordPage, { generateMetadata } from './with-reviews-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsRuthlessChaosWikiKeywordPage />;
}
