import RealMapNostaltherHighscoresKeywordPage, { generateMetadata } from './real-map-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNostaltherHighscoresKeywordPage />;
}
