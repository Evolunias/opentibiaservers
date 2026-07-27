import ActiveMarolaotHighscoresKeywordPage, { generateMetadata } from './active-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMarolaotHighscoresKeywordPage />;
}
