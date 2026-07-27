import Tibia12PvpEnforcedDiscordKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedDiscordKeywordPage />;
}
