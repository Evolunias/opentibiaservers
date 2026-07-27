import WithReviewsNoxiousotRulesKeywordPage, { generateMetadata } from './with-reviews-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNoxiousotRulesKeywordPage />;
}
