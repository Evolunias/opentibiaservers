import SeasonalReviewLatinAmericaKeywordPage, { generateMetadata } from './seasonal-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewLatinAmericaKeywordPage />;
}
