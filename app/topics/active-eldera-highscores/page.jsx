import ActiveElderaHighscoresKeywordPage, { generateMetadata } from './active-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaHighscoresKeywordPage />;
}
