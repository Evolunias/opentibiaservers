import JameraHighscoresKeywordPage, { generateMetadata } from './jamera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraHighscoresKeywordPage />;
}
