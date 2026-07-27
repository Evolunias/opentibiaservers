import DoleraHighscoresKeywordPage, { generateMetadata } from './dolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraHighscoresKeywordPage />;
}
