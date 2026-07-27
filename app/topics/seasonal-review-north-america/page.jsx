import SeasonalReviewNorthAmericaKeywordPage, { generateMetadata } from './seasonal-review-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewNorthAmericaKeywordPage />;
}
