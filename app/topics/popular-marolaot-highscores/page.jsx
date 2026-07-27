import PopularMarolaotHighscoresKeywordPage, { generateMetadata } from './popular-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotHighscoresKeywordPage />;
}
