import LowrateRookgaardTalesHighscoresKeywordPage, { generateMetadata } from './lowrate-rookgaard-tales-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRookgaardTalesHighscoresKeywordPage />;
}
