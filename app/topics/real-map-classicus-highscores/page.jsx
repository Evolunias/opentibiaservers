import RealMapClassicusHighscoresKeywordPage, { generateMetadata } from './real-map-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusHighscoresKeywordPage />;
}
