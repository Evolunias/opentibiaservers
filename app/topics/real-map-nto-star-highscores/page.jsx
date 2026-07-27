import RealMapNtoStarHighscoresKeywordPage, { generateMetadata } from './real-map-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNtoStarHighscoresKeywordPage />;
}
