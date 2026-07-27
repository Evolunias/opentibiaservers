import WithDiscordCanobServerKeywordPage, { generateMetadata } from './with-discord-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobServerKeywordPage />;
}
