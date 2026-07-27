import RealMapRubinotHighscoresKeywordPage, { generateMetadata } from './real-map-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRubinotHighscoresKeywordPage />;
}
