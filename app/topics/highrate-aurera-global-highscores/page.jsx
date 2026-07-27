import HighrateAureraGlobalHighscoresKeywordPage, { generateMetadata } from './highrate-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAureraGlobalHighscoresKeywordPage />;
}
