import WithDiscordCanobOtsKeywordPage, { generateMetadata } from './with-discord-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobOtsKeywordPage />;
}
