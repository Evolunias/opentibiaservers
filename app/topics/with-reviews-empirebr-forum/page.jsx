import WithReviewsEmpirebrForumKeywordPage, { generateMetadata } from './with-reviews-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEmpirebrForumKeywordPage />;
}
