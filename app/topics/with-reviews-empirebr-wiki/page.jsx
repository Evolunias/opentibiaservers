import WithReviewsEmpirebrWikiKeywordPage, { generateMetadata } from './with-reviews-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEmpirebrWikiKeywordPage />;
}
