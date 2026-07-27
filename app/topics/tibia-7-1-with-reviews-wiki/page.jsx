import Tibia71WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-7-1-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithReviewsWikiKeywordPage />;
}
