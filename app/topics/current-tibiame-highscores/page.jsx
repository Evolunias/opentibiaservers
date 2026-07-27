import CurrentTibiameHighscoresKeywordPage, { generateMetadata } from './current-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameHighscoresKeywordPage />;
}
