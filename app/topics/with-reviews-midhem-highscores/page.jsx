import WithReviewsMidhemHighscoresKeywordPage, { generateMetadata } from './with-reviews-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemHighscoresKeywordPage />;
}
