import RealMapOxygenotHighscoresKeywordPage, { generateMetadata } from './real-map-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOxygenotHighscoresKeywordPage />;
}
