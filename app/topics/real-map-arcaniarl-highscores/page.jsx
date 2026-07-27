import RealMapArcaniarlHighscoresKeywordPage, { generateMetadata } from './real-map-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArcaniarlHighscoresKeywordPage />;
}
