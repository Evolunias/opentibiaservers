import Tibia80WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-8-0-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithReviewsWikiKeywordPage />;
}
