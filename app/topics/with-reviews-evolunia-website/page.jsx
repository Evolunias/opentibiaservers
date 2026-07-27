import WithReviewsEvoluniaWebsiteKeywordPage, { generateMetadata } from './with-reviews-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEvoluniaWebsiteKeywordPage />;
}
