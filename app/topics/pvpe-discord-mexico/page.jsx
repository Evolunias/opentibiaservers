import PvpeDiscordMexicoKeywordPage, { generateMetadata } from './pvpe-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordMexicoKeywordPage />;
}
