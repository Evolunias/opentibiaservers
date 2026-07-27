import WithReviewsCyntaraHighscoresKeywordPage, { generateMetadata } from './with-reviews-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraHighscoresKeywordPage />;
}
