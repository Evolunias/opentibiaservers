import SaintsotReviewKeywordPage, { generateMetadata } from './saintsot-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotReviewKeywordPage />;
}
