import HighrateCanobDiscordKeywordPage, { generateMetadata } from './highrate-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobDiscordKeywordPage />;
}
