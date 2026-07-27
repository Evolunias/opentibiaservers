import RealMapThorniaHighscoresKeywordPage, { generateMetadata } from './real-map-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapThorniaHighscoresKeywordPage />;
}
