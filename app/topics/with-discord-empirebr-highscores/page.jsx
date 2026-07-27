import WithDiscordEmpirebrHighscoresKeywordPage, { generateMetadata } from './with-discord-empirebr-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEmpirebrHighscoresKeywordPage />;
}
