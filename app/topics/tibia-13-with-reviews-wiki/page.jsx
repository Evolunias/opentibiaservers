import Tibia13WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-13-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithReviewsWikiKeywordPage />;
}
