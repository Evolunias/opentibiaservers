import RealMapMiracleHighscoresKeywordPage, { generateMetadata } from './real-map-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleHighscoresKeywordPage />;
}
