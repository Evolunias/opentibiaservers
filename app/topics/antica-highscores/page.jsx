import AnticaHighscoresKeywordPage, { generateMetadata } from './antica-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AnticaHighscoresKeywordPage />;
}
