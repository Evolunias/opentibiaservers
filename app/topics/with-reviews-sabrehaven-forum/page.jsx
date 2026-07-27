import WithReviewsSabrehavenForumKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenForumKeywordPage />;
}
