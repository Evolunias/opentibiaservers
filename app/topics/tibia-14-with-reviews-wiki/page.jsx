import Tibia14WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-14-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithReviewsWikiKeywordPage />;
}
