import NewSeasonSaintsotHighscoresKeywordPage, { generateMetadata } from './new-season-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotHighscoresKeywordPage />;
}
