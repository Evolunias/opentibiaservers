import ActiveZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './active-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZezeniaOnlineHighscoresKeywordPage />;
}
