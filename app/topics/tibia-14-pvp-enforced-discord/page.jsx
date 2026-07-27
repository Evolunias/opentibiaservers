import Tibia14PvpEnforcedDiscordKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedDiscordKeywordPage />;
}
