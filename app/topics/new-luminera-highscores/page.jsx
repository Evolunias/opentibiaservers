import NewLumineraHighscoresKeywordPage, { generateMetadata } from './new-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraHighscoresKeywordPage />;
}
