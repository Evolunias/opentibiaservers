import WithDiscordNtoStarHighscoresKeywordPage, { generateMetadata } from './with-discord-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarHighscoresKeywordPage />;
}
