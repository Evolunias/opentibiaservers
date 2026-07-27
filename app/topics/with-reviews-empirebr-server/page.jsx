import WithReviewsEmpirebrServerKeywordPage, { generateMetadata } from './with-reviews-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEmpirebrServerKeywordPage />;
}
