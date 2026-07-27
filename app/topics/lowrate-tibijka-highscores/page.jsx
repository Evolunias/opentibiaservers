import LowrateTibijkaHighscoresKeywordPage, { generateMetadata } from './lowrate-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaHighscoresKeywordPage />;
}
