import WithReviewsSaintsotClientKeywordPage, { generateMetadata } from './with-reviews-saintsot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotClientKeywordPage />;
}
