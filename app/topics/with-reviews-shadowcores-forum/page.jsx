import WithReviewsShadowcoresForumKeywordPage, { generateMetadata } from './with-reviews-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsShadowcoresForumKeywordPage />;
}
