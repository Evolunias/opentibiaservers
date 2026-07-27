import WithReviewsAlasteraWikiKeywordPage, { generateMetadata } from './with-reviews-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraWikiKeywordPage />;
}
