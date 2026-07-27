import OfficialMarolaotHighscoresKeywordPage, { generateMetadata } from './official-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotHighscoresKeywordPage />;
}
