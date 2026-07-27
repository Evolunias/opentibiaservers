import Tibia84WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-8-4-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithReviewsWikiKeywordPage />;
}
