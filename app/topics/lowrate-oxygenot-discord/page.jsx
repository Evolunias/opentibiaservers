import LowrateOxygenotDiscordKeywordPage, { generateMetadata } from './lowrate-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotDiscordKeywordPage />;
}
