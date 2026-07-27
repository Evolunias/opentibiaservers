import WithDiscordMidhemDiscordKeywordPage, { generateMetadata } from './with-discord-midhem-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemDiscordKeywordPage />;
}
