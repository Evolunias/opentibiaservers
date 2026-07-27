import Tibia76WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-7-6-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithReviewsWikiKeywordPage />;
}
