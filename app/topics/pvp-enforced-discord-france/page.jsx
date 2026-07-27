import PvpEnforcedDiscordFranceKeywordPage, { generateMetadata } from './pvp-enforced-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedDiscordFranceKeywordPage />;
}
