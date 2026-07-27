import LowrateZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './lowrate-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZezeniaOnlineHighscoresKeywordPage />;
}
