import RetroDiscordSwedenKeywordPage, { generateMetadata } from './retro-discord-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordSwedenKeywordPage />;
}
