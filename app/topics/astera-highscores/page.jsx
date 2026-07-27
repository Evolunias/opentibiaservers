import AsteraHighscoresKeywordPage, { generateMetadata } from './astera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraHighscoresKeywordPage />;
}
