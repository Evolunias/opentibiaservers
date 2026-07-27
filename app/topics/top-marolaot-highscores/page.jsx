import TopMarolaotHighscoresKeywordPage, { generateMetadata } from './top-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotHighscoresKeywordPage />;
}
