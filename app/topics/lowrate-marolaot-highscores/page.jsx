import LowrateMarolaotHighscoresKeywordPage, { generateMetadata } from './lowrate-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMarolaotHighscoresKeywordPage />;
}
