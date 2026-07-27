import NewSeasonMidhemHighscoresKeywordPage, { generateMetadata } from './new-season-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemHighscoresKeywordPage />;
}
