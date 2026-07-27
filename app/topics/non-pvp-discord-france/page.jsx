import NonPvpDiscordFranceKeywordPage, { generateMetadata } from './non-pvp-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordFranceKeywordPage />;
}
