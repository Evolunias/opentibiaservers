import WithDiscordTibijkaHighscoresKeywordPage, { generateMetadata } from './with-discord-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaHighscoresKeywordPage />;
}
