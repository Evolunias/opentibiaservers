import RetroDiscordUsaKeywordPage, { generateMetadata } from './retro-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordUsaKeywordPage />;
}
