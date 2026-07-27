import PopularCyntaraHighscoresKeywordPage, { generateMetadata } from './popular-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCyntaraHighscoresKeywordPage />;
}
