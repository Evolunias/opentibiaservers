import ActiveOxygenotDiscordKeywordPage, { generateMetadata } from './active-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotDiscordKeywordPage />;
}
