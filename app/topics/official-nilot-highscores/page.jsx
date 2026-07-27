import OfficialNilotHighscoresKeywordPage, { generateMetadata } from './official-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotHighscoresKeywordPage />;
}
