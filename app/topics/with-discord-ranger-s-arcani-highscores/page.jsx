import WithDiscordRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './with-discord-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRangerSArcaniHighscoresKeywordPage />;
}
