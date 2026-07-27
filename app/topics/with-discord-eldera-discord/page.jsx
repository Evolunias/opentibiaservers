import WithDiscordElderaDiscordKeywordPage, { generateMetadata } from './with-discord-eldera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaDiscordKeywordPage />;
}
