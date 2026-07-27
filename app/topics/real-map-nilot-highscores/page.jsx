import RealMapNilotHighscoresKeywordPage, { generateMetadata } from './real-map-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotHighscoresKeywordPage />;
}
