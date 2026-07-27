import WithDiscordRealestaDiscordKeywordPage, { generateMetadata } from './with-discord-realesta-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaDiscordKeywordPage />;
}
