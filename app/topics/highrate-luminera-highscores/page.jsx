import HighrateLumineraHighscoresKeywordPage, { generateMetadata } from './highrate-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraHighscoresKeywordPage />;
}
