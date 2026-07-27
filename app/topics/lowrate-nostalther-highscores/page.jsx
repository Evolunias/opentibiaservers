import LowrateNostaltherHighscoresKeywordPage, { generateMetadata } from './lowrate-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherHighscoresKeywordPage />;
}
