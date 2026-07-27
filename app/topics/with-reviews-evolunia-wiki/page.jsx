import WithReviewsEvoluniaWikiKeywordPage, { generateMetadata } from './with-reviews-evolunia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaWikiKeywordPage />;
}
