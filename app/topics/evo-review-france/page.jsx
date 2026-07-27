import EvoReviewFranceKeywordPage, { generateMetadata } from './evo-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoReviewFranceKeywordPage />;
}
