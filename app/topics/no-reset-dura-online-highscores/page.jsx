import NoResetDuraOnlineHighscoresKeywordPage, { generateMetadata } from './no-reset-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineHighscoresKeywordPage />;
}
