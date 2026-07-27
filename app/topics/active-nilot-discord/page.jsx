import ActiveNilotDiscordKeywordPage, { generateMetadata } from './active-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotDiscordKeywordPage />;
}
