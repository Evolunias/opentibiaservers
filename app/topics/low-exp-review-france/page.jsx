import LowExpReviewFranceKeywordPage, { generateMetadata } from './low-exp-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpReviewFranceKeywordPage />;
}
