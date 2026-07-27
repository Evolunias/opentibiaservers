import OfficialElderaHighscoresKeywordPage, { generateMetadata } from './official-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaHighscoresKeywordPage />;
}
