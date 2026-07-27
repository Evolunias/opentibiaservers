import NewSeasonCoxaotHighscoresKeywordPage, { generateMetadata } from './new-season-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotHighscoresKeywordPage />;
}
