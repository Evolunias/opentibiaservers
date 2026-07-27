import Tibia100WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-10-0-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithReviewsWikiKeywordPage />;
}
