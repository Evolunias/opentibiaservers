import OfficialCanobHighscoresKeywordPage, { generateMetadata } from './official-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCanobHighscoresKeywordPage />;
}
