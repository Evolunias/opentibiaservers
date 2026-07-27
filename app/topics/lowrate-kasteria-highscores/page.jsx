import LowrateKasteriaHighscoresKeywordPage, { generateMetadata } from './lowrate-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaHighscoresKeywordPage />;
}
