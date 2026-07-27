import LowrateNilotHighscoresKeywordPage, { generateMetadata } from './lowrate-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotHighscoresKeywordPage />;
}
