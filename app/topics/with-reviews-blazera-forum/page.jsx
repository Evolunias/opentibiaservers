import WithReviewsBlazeraForumKeywordPage, { generateMetadata } from './with-reviews-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsBlazeraForumKeywordPage />;
}
