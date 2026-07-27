import WithDiscordMidhemOtsKeywordPage, { generateMetadata } from './with-discord-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemOtsKeywordPage />;
}
