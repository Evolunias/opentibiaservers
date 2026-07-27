import PvpEnforcedOtServerDiscordKeywordPage, { generateMetadata } from './pvp-enforced-ot-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtServerDiscordKeywordPage />;
}
