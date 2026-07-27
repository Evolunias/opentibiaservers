import RealMapNepreniaHighscoresKeywordPage, { generateMetadata } from './real-map-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNepreniaHighscoresKeywordPage />;
}
