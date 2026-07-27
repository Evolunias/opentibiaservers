import WithReviewsEvoluniaServerKeywordPage, { generateMetadata } from './with-reviews-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaServerKeywordPage />;
}
