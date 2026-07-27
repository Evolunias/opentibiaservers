import WithReviewsSaintsotGuideKeywordPage, { generateMetadata } from './with-reviews-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotGuideKeywordPage />;
}
