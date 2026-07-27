import RealMapSabrehavenHighscoresKeywordPage, { generateMetadata } from './real-map-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSabrehavenHighscoresKeywordPage />;
}
