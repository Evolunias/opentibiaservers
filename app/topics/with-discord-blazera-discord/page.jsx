import WithDiscordBlazeraDiscordKeywordPage, { generateMetadata } from './with-discord-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraDiscordKeywordPage />;
}
