import RealMapSaintsotHighscoresKeywordPage, { generateMetadata } from './real-map-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSaintsotHighscoresKeywordPage />;
}
