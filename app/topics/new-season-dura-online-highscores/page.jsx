import NewSeasonDuraOnlineHighscoresKeywordPage, { generateMetadata } from './new-season-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDuraOnlineHighscoresKeywordPage />;
}
