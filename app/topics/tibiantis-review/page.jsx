import TibiantisReviewKeywordPage, { generateMetadata } from './tibiantis-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisReviewKeywordPage />;
}
