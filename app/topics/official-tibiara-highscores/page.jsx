import OfficialTibiaraHighscoresKeywordPage, { generateMetadata } from './official-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraHighscoresKeywordPage />;
}
