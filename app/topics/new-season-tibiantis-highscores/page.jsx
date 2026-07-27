import NewSeasonTibiantisHighscoresKeywordPage, { generateMetadata } from './new-season-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiantisHighscoresKeywordPage />;
}
