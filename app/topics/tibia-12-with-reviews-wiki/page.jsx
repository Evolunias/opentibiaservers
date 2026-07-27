import Tibia12WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-12-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithReviewsWikiKeywordPage />;
}
