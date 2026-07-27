import LowrateRealestaDiscordKeywordPage, { generateMetadata } from './lowrate-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaDiscordKeywordPage />;
}
