import BestImperianicHighscoresKeywordPage, { generateMetadata } from './best-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicHighscoresKeywordPage />;
}
