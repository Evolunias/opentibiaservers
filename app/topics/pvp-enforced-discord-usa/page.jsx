import PvpEnforcedDiscordUsaKeywordPage, { generateMetadata } from './pvp-enforced-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedDiscordUsaKeywordPage />;
}
