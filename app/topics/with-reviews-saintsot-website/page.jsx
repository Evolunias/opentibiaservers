import WithReviewsSaintsotWebsiteKeywordPage, { generateMetadata } from './with-reviews-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotWebsiteKeywordPage />;
}
