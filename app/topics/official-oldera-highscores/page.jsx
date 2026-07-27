import OfficialOlderaHighscoresKeywordPage, { generateMetadata } from './official-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaHighscoresKeywordPage />;
}
