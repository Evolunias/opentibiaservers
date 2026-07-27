import WithReviewsAmeriaWikiKeywordPage, { generateMetadata } from './with-reviews-ameria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAmeriaWikiKeywordPage />;
}
