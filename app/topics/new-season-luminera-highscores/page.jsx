import NewSeasonLumineraHighscoresKeywordPage, { generateMetadata } from './new-season-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraHighscoresKeywordPage />;
}
