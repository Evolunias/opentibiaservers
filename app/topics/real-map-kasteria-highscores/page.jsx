import RealMapKasteriaHighscoresKeywordPage, { generateMetadata } from './real-map-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaHighscoresKeywordPage />;
}
