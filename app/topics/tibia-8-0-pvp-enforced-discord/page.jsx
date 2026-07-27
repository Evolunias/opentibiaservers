import Tibia80PvpEnforcedDiscordKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedDiscordKeywordPage />;
}
