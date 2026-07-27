import SeasonalReviewArgentinaKeywordPage, { generateMetadata } from './seasonal-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewArgentinaKeywordPage />;
}
