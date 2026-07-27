import OfficialOxygenotHighscoresKeywordPage, { generateMetadata } from './official-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotHighscoresKeywordPage />;
}
