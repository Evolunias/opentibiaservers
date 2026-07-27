import WithDiscordSabrehavenHighscoresKeywordPage, { generateMetadata } from './with-discord-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenHighscoresKeywordPage />;
}
