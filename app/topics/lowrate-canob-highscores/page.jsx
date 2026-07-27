import LowrateCanobHighscoresKeywordPage, { generateMetadata } from './lowrate-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobHighscoresKeywordPage />;
}
