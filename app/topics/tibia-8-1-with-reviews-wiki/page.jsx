import Tibia81WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-8-1-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithReviewsWikiKeywordPage />;
}
