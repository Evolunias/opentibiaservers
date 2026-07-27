import PvpEnforcedReviewFranceKeywordPage, { generateMetadata } from './pvp-enforced-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedReviewFranceKeywordPage />;
}
