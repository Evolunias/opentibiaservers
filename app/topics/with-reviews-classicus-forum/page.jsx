import WithReviewsClassicusForumKeywordPage, { generateMetadata } from './with-reviews-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusForumKeywordPage />;
}
