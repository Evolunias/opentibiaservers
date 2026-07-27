import RookgaardTalesHighscoresKeywordPage, { generateMetadata } from './rookgaard-tales-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesHighscoresKeywordPage />;
}
