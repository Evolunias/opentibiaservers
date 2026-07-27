import PopularZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './popular-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineHighscoresKeywordPage />;
}
