import CurrentRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './current-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniHighscoresKeywordPage />;
}
