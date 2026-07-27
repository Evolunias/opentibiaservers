import WithReviewsSaintsotWikiKeywordPage, { generateMetadata } from './with-reviews-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSaintsotWikiKeywordPage />;
}
