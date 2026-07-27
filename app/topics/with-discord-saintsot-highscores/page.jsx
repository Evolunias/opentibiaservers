import WithDiscordSaintsotHighscoresKeywordPage, { generateMetadata } from './with-discord-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSaintsotHighscoresKeywordPage />;
}
