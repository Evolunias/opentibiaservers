import WithDiscordRealeraDiscordKeywordPage, { generateMetadata } from './with-discord-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraDiscordKeywordPage />;
}
