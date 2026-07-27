import WithReviewsSaintsotKeywordPage, { generateMetadata } from './with-reviews-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotKeywordPage />;
}
