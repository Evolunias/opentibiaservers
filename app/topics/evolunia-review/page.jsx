import EvoluniaReviewKeywordPage, { generateMetadata } from './evolunia-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaReviewKeywordPage />;
}
