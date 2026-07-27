import WithReviewsArcaniarlForumKeywordPage, { generateMetadata } from './with-reviews-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArcaniarlForumKeywordPage />;
}
