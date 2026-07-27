import CurrentLumineraHighscoresKeywordPage, { generateMetadata } from './current-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraHighscoresKeywordPage />;
}
