import WithReviewsEvoluniaForumKeywordPage, { generateMetadata } from './with-reviews-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaForumKeywordPage />;
}
