import WithDiscordUnlineDiscordKeywordPage, { generateMetadata } from './with-discord-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineDiscordKeywordPage />;
}
