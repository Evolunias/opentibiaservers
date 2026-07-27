import Tibia854WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-8-54-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithReviewsWikiKeywordPage />;
}
