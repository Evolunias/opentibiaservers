import RealMapTibiantisHighscoresKeywordPage, { generateMetadata } from './real-map-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiantisHighscoresKeywordPage />;
}
