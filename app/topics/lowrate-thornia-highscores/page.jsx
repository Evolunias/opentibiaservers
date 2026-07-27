import LowrateThorniaHighscoresKeywordPage, { generateMetadata } from './lowrate-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaHighscoresKeywordPage />;
}
