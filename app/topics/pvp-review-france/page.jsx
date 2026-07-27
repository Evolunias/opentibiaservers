import PvpReviewFranceKeywordPage, { generateMetadata } from './pvp-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpReviewFranceKeywordPage />;
}
