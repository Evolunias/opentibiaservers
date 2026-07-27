import NewSeasonZezeniaOnlineHighscoresKeywordPage, { generateMetadata } from './new-season-zezenia-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonZezeniaOnlineHighscoresKeywordPage />;
}
