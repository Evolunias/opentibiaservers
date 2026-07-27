import WithDiscordArcaniarlHighscoresKeywordPage, { generateMetadata } from './with-discord-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArcaniarlHighscoresKeywordPage />;
}
