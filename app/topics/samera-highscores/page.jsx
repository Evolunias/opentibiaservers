import SameraHighscoresKeywordPage, { generateMetadata } from './samera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraHighscoresKeywordPage />;
}
