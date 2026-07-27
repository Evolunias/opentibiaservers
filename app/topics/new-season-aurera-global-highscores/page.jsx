import NewSeasonAureraGlobalHighscoresKeywordPage, { generateMetadata } from './new-season-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalHighscoresKeywordPage />;
}
