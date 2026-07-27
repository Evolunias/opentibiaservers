import RealMapCarlinotHighscoresKeywordPage, { generateMetadata } from './real-map-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCarlinotHighscoresKeywordPage />;
}
