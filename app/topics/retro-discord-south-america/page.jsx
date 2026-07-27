import RetroDiscordSouthAmericaKeywordPage, { generateMetadata } from './retro-discord-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordSouthAmericaKeywordPage />;
}
