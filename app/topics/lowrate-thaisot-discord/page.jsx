import LowrateThaisotDiscordKeywordPage, { generateMetadata } from './lowrate-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotDiscordKeywordPage />;
}
