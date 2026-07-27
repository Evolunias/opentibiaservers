import SaintsotReviewsKeywordPage, { generateMetadata } from './saintsot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotReviewsKeywordPage />;
}
