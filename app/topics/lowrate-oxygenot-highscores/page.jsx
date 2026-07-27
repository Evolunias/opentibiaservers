import LowrateOxygenotHighscoresKeywordPage, { generateMetadata } from './lowrate-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotHighscoresKeywordPage />;
}
