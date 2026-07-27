import RetroDiscordArgentinaKeywordPage, { generateMetadata } from './retro-discord-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordArgentinaKeywordPage />;
}
