import NewSeasonXanteriaHighscoresKeywordPage, { generateMetadata } from './new-season-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaHighscoresKeywordPage />;
}
