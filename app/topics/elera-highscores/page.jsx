import EleraHighscoresKeywordPage, { generateMetadata } from './elera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraHighscoresKeywordPage />;
}
