import CurrentZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './current-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineHighscoresKeywordPage />;
}
