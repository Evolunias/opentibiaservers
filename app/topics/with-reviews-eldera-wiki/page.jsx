import WithReviewsElderaWikiKeywordPage, { generateMetadata } from './with-reviews-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsElderaWikiKeywordPage />;
}
