import HighrateKasteriaDiscordKeywordPage, { generateMetadata } from './highrate-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaDiscordKeywordPage />;
}
