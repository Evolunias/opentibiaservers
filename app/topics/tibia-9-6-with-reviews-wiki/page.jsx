import Tibia96WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-9-6-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithReviewsWikiKeywordPage />;
}
