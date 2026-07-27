import RealMapThaisotHighscoresKeywordPage, { generateMetadata } from './real-map-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThaisotHighscoresKeywordPage />;
}
