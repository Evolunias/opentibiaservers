import WithDiscordUnlinePrivateServerKeywordPage, { generateMetadata } from './with-discord-unline-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlinePrivateServerKeywordPage />;
}
