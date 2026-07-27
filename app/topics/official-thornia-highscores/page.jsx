import OfficialThorniaHighscoresKeywordPage, { generateMetadata } from './official-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaHighscoresKeywordPage />;
}
