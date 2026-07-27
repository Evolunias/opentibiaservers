import ActiveDuraOnlineHighscoresKeywordPage, { generateMetadata } from './active-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineHighscoresKeywordPage />;
}
