import WithDiscordSeasonMexicoKeywordPage, { generateMetadata } from './with-discord-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSeasonMexicoKeywordPage />;
}
