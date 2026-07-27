import WithDiscordEvoluniaHighscoresKeywordPage, { generateMetadata } from './with-discord-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaHighscoresKeywordPage />;
}
