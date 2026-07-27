import WithActivePlayersReviewPolandKeywordPage, { generateMetadata } from './with-active-players-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersReviewPolandKeywordPage />;
}
