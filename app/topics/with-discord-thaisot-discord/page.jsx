import WithDiscordThaisotDiscordKeywordPage, { generateMetadata } from './with-discord-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotDiscordKeywordPage />;
}
