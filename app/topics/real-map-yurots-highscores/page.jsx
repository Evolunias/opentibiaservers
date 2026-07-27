import RealMapYurotsHighscoresKeywordPage, { generateMetadata } from './real-map-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsHighscoresKeywordPage />;
}
