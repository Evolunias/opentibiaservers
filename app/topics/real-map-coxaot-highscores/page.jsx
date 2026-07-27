import RealMapCoxaotHighscoresKeywordPage, { generateMetadata } from './real-map-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotHighscoresKeywordPage />;
}
