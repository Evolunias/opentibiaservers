import NewSeasonTibianusHighscoresKeywordPage, { generateMetadata } from './new-season-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusHighscoresKeywordPage />;
}
