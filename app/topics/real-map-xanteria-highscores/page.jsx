import RealMapXanteriaHighscoresKeywordPage, { generateMetadata } from './real-map-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaHighscoresKeywordPage />;
}
