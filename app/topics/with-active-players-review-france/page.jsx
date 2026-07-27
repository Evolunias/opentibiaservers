import WithActivePlayersReviewFranceKeywordPage, { generateMetadata } from './with-active-players-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersReviewFranceKeywordPage />;
}
