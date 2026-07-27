import WithReviewsForumFranceKeywordPage, { generateMetadata } from './with-reviews-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsForumFranceKeywordPage />;
}
