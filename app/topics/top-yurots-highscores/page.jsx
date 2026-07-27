import TopYurotsHighscoresKeywordPage, { generateMetadata } from './top-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsHighscoresKeywordPage />;
}
