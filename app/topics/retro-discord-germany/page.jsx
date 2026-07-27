import RetroDiscordGermanyKeywordPage, { generateMetadata } from './retro-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordGermanyKeywordPage />;
}
