import NonPvpReviewFranceKeywordPage, { generateMetadata } from './non-pvp-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpReviewFranceKeywordPage />;
}
