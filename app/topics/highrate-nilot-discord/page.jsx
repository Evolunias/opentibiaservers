import HighrateNilotDiscordKeywordPage, { generateMetadata } from './highrate-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotDiscordKeywordPage />;
}
