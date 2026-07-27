import HighrateThorniaHighscoresKeywordPage, { generateMetadata } from './highrate-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaHighscoresKeywordPage />;
}
