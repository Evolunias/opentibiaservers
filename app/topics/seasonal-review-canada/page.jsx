import SeasonalReviewCanadaKeywordPage, { generateMetadata } from './seasonal-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewCanadaKeywordPage />;
}
