import ActiveThaisotDiscordKeywordPage, { generateMetadata } from './active-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotDiscordKeywordPage />;
}
