import LowrateKasteriaDiscordKeywordPage, { generateMetadata } from './lowrate-kasteria-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaDiscordKeywordPage />;
}
