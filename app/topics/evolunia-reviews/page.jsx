import EvoluniaReviewsKeywordPage, { generateMetadata } from './evolunia-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaReviewsKeywordPage />;
}
