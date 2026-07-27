import NewSeasonEvoleraHighscoresKeywordPage, { generateMetadata } from './new-season-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraHighscoresKeywordPage />;
}
