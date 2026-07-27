import WithReviewsTibiameForumKeywordPage, { generateMetadata } from './with-reviews-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiameForumKeywordPage />;
}
