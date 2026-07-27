import WithDiscordMidhemKeywordPage, { generateMetadata } from './with-discord-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemKeywordPage />;
}
