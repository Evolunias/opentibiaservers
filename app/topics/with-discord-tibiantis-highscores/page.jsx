import WithDiscordTibiantisHighscoresKeywordPage, { generateMetadata } from './with-discord-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiantisHighscoresKeywordPage />;
}
