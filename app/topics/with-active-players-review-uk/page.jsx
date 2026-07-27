import WithActivePlayersReviewUkKeywordPage, { generateMetadata } from './with-active-players-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersReviewUkKeywordPage />;
}
