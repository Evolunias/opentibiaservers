import Tibia15PvpEnforcedDiscordKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedDiscordKeywordPage />;
}
