import WithDiscordArchlightHighscoresKeywordPage, { generateMetadata } from './with-discord-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightHighscoresKeywordPage />;
}
