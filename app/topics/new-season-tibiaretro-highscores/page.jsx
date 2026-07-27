import NewSeasonTibiaretroHighscoresKeywordPage, { generateMetadata } from './new-season-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroHighscoresKeywordPage />;
}
