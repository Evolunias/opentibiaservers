import HighrateMarolaotHighscoresKeywordPage, { generateMetadata } from './highrate-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMarolaotHighscoresKeywordPage />;
}
