import WithDiscordDuraOnlineHighscoresKeywordPage, { generateMetadata } from './with-discord-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineHighscoresKeywordPage />;
}
