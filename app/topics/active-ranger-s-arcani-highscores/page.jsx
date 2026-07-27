import ActiveRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './active-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRangerSArcaniHighscoresKeywordPage />;
}
