import AldoraHighscoresKeywordPage, { generateMetadata } from './aldora-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraHighscoresKeywordPage />;
}
