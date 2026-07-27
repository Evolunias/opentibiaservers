import NewSeasonSabrehavenHighscoresKeywordPage, { generateMetadata } from './new-season-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenHighscoresKeywordPage />;
}
