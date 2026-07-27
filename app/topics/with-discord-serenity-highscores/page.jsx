import WithDiscordSerenityHighscoresKeywordPage, { generateMetadata } from './with-discord-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityHighscoresKeywordPage />;
}
