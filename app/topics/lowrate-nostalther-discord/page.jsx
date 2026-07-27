import LowrateNostaltherDiscordKeywordPage, { generateMetadata } from './lowrate-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherDiscordKeywordPage />;
}
