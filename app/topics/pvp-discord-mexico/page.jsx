import PvpDiscordMexicoKeywordPage, { generateMetadata } from './pvp-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDiscordMexicoKeywordPage />;
}
