import RealMapMidhemHighscoresKeywordPage, { generateMetadata } from './real-map-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemHighscoresKeywordPage />;
}
