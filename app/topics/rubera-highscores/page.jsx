import RuberaHighscoresKeywordPage, { generateMetadata } from './rubera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaHighscoresKeywordPage />;
}
