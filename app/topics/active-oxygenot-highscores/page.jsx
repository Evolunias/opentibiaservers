import ActiveOxygenotHighscoresKeywordPage, { generateMetadata } from './active-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotHighscoresKeywordPage />;
}
