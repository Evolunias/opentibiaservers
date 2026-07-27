import CustomCyntaraHighscoresKeywordPage, { generateMetadata } from './custom-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCyntaraHighscoresKeywordPage />;
}
