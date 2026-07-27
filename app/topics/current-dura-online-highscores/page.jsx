import CurrentDuraOnlineHighscoresKeywordPage, { generateMetadata } from './current-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineHighscoresKeywordPage />;
}
