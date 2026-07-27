import BestThorniaHighscoresKeywordPage, { generateMetadata } from './best-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaHighscoresKeywordPage />;
}
