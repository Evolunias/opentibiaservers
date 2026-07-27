import HighrateNostaltherHighscoresKeywordPage, { generateMetadata } from './highrate-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherHighscoresKeywordPage />;
}
