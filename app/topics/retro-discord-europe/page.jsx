import RetroDiscordEuropeKeywordPage, { generateMetadata } from './retro-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordEuropeKeywordPage />;
}
