import WithReviewsSaintsotOtsKeywordPage, { generateMetadata } from './with-reviews-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotOtsKeywordPage />;
}
