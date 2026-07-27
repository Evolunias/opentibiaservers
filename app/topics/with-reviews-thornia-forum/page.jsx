import WithReviewsThorniaForumKeywordPage, { generateMetadata } from './with-reviews-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsThorniaForumKeywordPage />;
}
