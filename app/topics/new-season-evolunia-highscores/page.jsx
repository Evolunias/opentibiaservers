import NewSeasonEvoluniaHighscoresKeywordPage, { generateMetadata } from './new-season-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoluniaHighscoresKeywordPage />;
}
