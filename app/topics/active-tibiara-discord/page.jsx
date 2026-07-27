import ActiveTibiaraDiscordKeywordPage, { generateMetadata } from './active-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraDiscordKeywordPage />;
}
