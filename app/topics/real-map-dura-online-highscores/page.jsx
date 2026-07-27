import RealMapDuraOnlineHighscoresKeywordPage, { generateMetadata } from './real-map-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineHighscoresKeywordPage />;
}
