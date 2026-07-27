import NewSeasonTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './new-season-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaoriginsHighscoresKeywordPage />;
}
