import HighrateNostaltherDiscordKeywordPage, { generateMetadata } from './highrate-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherDiscordKeywordPage />;
}
