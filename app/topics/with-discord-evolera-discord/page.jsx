import WithDiscordEvoleraDiscordKeywordPage, { generateMetadata } from './with-discord-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoleraDiscordKeywordPage />;
}
