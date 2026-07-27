import BestZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './best-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZezeniaOnlineHighscoresKeywordPage />;
}
