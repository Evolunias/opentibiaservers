import TibiascapeHighscoresKeywordPage, { generateMetadata } from './tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeHighscoresKeywordPage />;
}
