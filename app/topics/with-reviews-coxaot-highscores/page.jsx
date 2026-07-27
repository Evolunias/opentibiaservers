import WithReviewsCoxaotHighscoresKeywordPage, { generateMetadata } from './with-reviews-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotHighscoresKeywordPage />;
}
