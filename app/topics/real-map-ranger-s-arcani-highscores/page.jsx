import RealMapRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './real-map-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRangerSArcaniHighscoresKeywordPage />;
}
