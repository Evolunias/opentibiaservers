import RetroDiscordCanadaKeywordPage, { generateMetadata } from './retro-discord-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordCanadaKeywordPage />;
}
