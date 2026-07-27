import WithActivePlayersReviewEuropeKeywordPage, { generateMetadata } from './with-active-players-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersReviewEuropeKeywordPage />;
}
