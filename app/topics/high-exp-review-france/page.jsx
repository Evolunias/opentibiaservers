import HighExpReviewFranceKeywordPage, { generateMetadata } from './high-exp-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpReviewFranceKeywordPage />;
}
