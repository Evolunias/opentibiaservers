import RealMapZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './real-map-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapZezeniaOnlineHighscoresKeywordPage />;
}
