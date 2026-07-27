import NewRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './new-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniHighscoresKeywordPage />;
}
