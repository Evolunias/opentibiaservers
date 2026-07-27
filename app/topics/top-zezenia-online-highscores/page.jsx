import TopZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './top-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineHighscoresKeywordPage />;
}
