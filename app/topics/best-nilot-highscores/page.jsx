import BestNilotHighscoresKeywordPage, { generateMetadata } from './best-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotHighscoresKeywordPage />;
}
