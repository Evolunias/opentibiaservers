import WithReviewsSaintsotServerKeywordPage, { generateMetadata } from './with-reviews-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotServerKeywordPage />;
}
