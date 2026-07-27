import HighrateXanteriaHighscoresKeywordPage, { generateMetadata } from './highrate-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaHighscoresKeywordPage />;
}
