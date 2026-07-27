import WithReviewsNostaltherWikiKeywordPage, { generateMetadata } from './with-reviews-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNostaltherWikiKeywordPage />;
}
