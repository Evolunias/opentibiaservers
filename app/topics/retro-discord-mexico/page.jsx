import RetroDiscordMexicoKeywordPage, { generateMetadata } from './retro-discord-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordMexicoKeywordPage />;
}
