import WithDiscordNilotDiscordKeywordPage, { generateMetadata } from './with-discord-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotDiscordKeywordPage />;
}
