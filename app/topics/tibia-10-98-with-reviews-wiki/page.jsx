import Tibia1098WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-10-98-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithReviewsWikiKeywordPage />;
}
