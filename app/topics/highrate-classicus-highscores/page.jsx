import HighrateClassicusHighscoresKeywordPage, { generateMetadata } from './highrate-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusHighscoresKeywordPage />;
}
