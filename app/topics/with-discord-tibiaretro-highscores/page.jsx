import WithDiscordTibiaretroHighscoresKeywordPage, { generateMetadata } from './with-discord-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaretroHighscoresKeywordPage />;
}
