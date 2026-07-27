import NewSeasonUnlineHighscoresKeywordPage, { generateMetadata } from './new-season-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineHighscoresKeywordPage />;
}
