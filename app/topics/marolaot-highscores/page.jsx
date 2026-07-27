import MarolaotHighscoresKeywordPage, { generateMetadata } from './marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotHighscoresKeywordPage />;
}
