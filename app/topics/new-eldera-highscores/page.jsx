import NewElderaHighscoresKeywordPage, { generateMetadata } from './new-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaHighscoresKeywordPage />;
}
