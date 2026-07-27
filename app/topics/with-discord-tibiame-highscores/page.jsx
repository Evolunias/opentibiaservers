import WithDiscordTibiameHighscoresKeywordPage, { generateMetadata } from './with-discord-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiameHighscoresKeywordPage />;
}
