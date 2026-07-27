import Tibia13PvpEnforcedDiscordKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedDiscordKeywordPage />;
}
