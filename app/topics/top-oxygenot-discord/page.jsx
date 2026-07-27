import TopOxygenotDiscordKeywordPage, { generateMetadata } from './top-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotDiscordKeywordPage />;
}
