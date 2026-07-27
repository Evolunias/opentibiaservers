import WithDiscordTibiaraDiscordKeywordPage, { generateMetadata } from './with-discord-tibiara-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraDiscordKeywordPage />;
}
