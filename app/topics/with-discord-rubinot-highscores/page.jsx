import WithDiscordRubinotHighscoresKeywordPage, { generateMetadata } from './with-discord-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotHighscoresKeywordPage />;
}
