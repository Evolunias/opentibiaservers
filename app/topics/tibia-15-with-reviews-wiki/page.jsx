import Tibia15WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-15-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithReviewsWikiKeywordPage />;
}
