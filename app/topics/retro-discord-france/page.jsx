import RetroDiscordFranceKeywordPage, { generateMetadata } from './retro-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordFranceKeywordPage />;
}
