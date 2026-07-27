import MorganaHighscoresKeywordPage, { generateMetadata } from './morgana-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaHighscoresKeywordPage />;
}
