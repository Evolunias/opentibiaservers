import LowrateTibiascapeHighscoresKeywordPage, { generateMetadata } from './lowrate-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeHighscoresKeywordPage />;
}
