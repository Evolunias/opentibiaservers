import WithDiscordTibiascapeHighscoresKeywordPage, { generateMetadata } from './with-discord-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeHighscoresKeywordPage />;
}
