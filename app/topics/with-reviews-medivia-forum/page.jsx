import WithReviewsMediviaForumKeywordPage, { generateMetadata } from './with-reviews-medivia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMediviaForumKeywordPage />;
}
