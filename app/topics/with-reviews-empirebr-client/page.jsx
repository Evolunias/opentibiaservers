import WithReviewsEmpirebrClientKeywordPage, { generateMetadata } from './with-reviews-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEmpirebrClientKeywordPage />;
}
