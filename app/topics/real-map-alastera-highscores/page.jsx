import RealMapAlasteraHighscoresKeywordPage, { generateMetadata } from './real-map-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapAlasteraHighscoresKeywordPage />;
}
