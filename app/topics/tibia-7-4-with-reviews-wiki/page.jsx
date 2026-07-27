import Tibia74WithReviewsWikiKeywordPage, { generateMetadata } from './tibia-7-4-with-reviews-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithReviewsWikiKeywordPage />;
}
