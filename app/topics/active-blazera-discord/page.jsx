import ActiveBlazeraDiscordKeywordPage, { generateMetadata } from './active-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraDiscordKeywordPage />;
}
