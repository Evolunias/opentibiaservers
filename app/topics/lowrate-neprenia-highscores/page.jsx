import LowrateNepreniaHighscoresKeywordPage, { generateMetadata } from './lowrate-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaHighscoresKeywordPage />;
}
