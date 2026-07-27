import LowrateRealeraDiscordKeywordPage, { generateMetadata } from './lowrate-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraDiscordKeywordPage />;
}
