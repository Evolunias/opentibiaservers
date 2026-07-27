import Tibia772WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-7-72-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithReviewsWikiKeywordPage />;
}
