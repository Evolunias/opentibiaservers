import HighrateAmeriaHighscoresKeywordPage, { generateMetadata } from './highrate-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaHighscoresKeywordPage />;
}
