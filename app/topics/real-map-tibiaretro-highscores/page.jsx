import RealMapTibiaretroHighscoresKeywordPage, { generateMetadata } from './real-map-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroHighscoresKeywordPage />;
}
