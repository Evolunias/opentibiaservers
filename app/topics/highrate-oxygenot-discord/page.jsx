import HighrateOxygenotDiscordKeywordPage, { generateMetadata } from './highrate-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotDiscordKeywordPage />;
}
