import SeasonalReviewUsaKeywordPage, { generateMetadata } from './seasonal-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewUsaKeywordPage />;
}
