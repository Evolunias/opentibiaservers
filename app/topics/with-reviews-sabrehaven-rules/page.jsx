import WithReviewsSabrehavenRulesKeywordPage, { generateMetadata } from './with-reviews-sabrehaven-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsSabrehavenRulesKeywordPage />;
}
