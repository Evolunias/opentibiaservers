import HighrateRealestaDiscordKeywordPage, { generateMetadata } from './highrate-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealestaDiscordKeywordPage />;
}
