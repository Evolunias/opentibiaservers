import FreshStartDuraOnlineHighscoresKeywordPage, { generateMetadata } from './fresh-start-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDuraOnlineHighscoresKeywordPage />;
}
