import TibiantisReviewsKeywordPage, { generateMetadata } from './tibiantis-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisReviewsKeywordPage />;
}
