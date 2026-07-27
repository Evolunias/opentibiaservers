import LowrateCyntaraHighscoresKeywordPage, { generateMetadata } from './lowrate-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCyntaraHighscoresKeywordPage />;
}
