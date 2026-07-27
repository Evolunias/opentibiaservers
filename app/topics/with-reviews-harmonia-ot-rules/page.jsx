import WithReviewsHarmoniaOtRulesKeywordPage, { generateMetadata } from './with-reviews-harmonia-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsHarmoniaOtRulesKeywordPage />;
}
