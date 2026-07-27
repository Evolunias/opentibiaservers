import WithReviewsNoxiousotForumKeywordPage, { generateMetadata } from './with-reviews-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotForumKeywordPage />;
}
