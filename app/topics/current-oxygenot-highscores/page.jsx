import CurrentOxygenotHighscoresKeywordPage, { generateMetadata } from './current-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotHighscoresKeywordPage />;
}
