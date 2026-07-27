import WithReviewsSaintsotOtKeywordPage, { generateMetadata } from './with-reviews-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotOtKeywordPage />;
}
