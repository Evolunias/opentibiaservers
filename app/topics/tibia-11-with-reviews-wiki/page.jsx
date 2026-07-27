import Tibia11WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-11-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithReviewsWikiKeywordPage />;
}
