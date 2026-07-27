import WithDiscordNoxiousotHighscoresKeywordPage, { generateMetadata } from './with-discord-noxiousot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNoxiousotHighscoresKeywordPage />;
}
