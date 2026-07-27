import WithReviewsMiracleHighscoresKeywordPage, { generateMetadata } from './with-reviews-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleHighscoresKeywordPage />;
}
