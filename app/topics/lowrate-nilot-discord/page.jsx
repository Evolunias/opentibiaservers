import LowrateNilotDiscordKeywordPage, { generateMetadata } from './lowrate-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotDiscordKeywordPage />;
}
