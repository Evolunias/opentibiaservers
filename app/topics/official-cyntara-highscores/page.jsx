import OfficialCyntaraHighscoresKeywordPage, { generateMetadata } from './official-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCyntaraHighscoresKeywordPage />;
}
