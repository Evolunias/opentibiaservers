import LowrateLumineraHighscoresKeywordPage, { generateMetadata } from './lowrate-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraHighscoresKeywordPage />;
}
