import WithReviewsEmpirebrHighscoresKeywordPage, { generateMetadata } from './with-reviews-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEmpirebrHighscoresKeywordPage />;
}
