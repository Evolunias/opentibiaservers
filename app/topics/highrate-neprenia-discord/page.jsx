import HighrateNepreniaDiscordKeywordPage, { generateMetadata } from './highrate-neprenia-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaDiscordKeywordPage />;
}
