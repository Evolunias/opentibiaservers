import SaintsotWithReviewsServerSwedenKeywordPage, { generateMetadata } from './saintsot-with-reviews-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotWithReviewsServerSwedenKeywordPage />;
}
