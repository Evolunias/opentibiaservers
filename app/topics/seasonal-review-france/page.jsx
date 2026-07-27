import SeasonalReviewFranceKeywordPage, { generateMetadata } from './seasonal-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalReviewFranceKeywordPage />;
}
