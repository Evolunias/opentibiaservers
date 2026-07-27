import RangerSArcaniHighscoresKeywordPage, { generateMetadata } from './ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniHighscoresKeywordPage />;
}
