import LowrateAmeriaHighscoresKeywordPage, { generateMetadata } from './lowrate-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaHighscoresKeywordPage />;
}
