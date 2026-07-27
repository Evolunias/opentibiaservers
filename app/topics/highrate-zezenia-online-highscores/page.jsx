import HighrateZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './highrate-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZezeniaOnlineHighscoresKeywordPage />;
}
