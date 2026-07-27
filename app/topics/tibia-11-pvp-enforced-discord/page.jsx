import Tibia11PvpEnforcedDiscordKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedDiscordKeywordPage />;
}
