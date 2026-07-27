import HighrateRealeraDiscordKeywordPage, { generateMetadata } from './highrate-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraDiscordKeywordPage />;
}
