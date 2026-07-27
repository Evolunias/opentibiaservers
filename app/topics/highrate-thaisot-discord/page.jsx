import HighrateThaisotDiscordKeywordPage, { generateMetadata } from './highrate-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotDiscordKeywordPage />;
}
