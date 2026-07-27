import FreshStartReviewFranceKeywordPage, { generateMetadata } from './fresh-start-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartReviewFranceKeywordPage />;
}
