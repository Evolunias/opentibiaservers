import RealMapMarolaotHighscoresKeywordPage, { generateMetadata } from './real-map-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMarolaotHighscoresKeywordPage />;
}
