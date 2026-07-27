import RealMapUnlineHighscoresKeywordPage, { generateMetadata } from './real-map-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineHighscoresKeywordPage />;
}
