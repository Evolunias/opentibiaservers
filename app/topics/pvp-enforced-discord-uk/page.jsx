import PvpEnforcedDiscordUkKeywordPage, { generateMetadata } from './pvp-enforced-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedDiscordUkKeywordPage />;
}
