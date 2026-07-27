import PvpDiscordFranceKeywordPage, { generateMetadata } from './pvp-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpDiscordFranceKeywordPage />;
}
