import WithDiscordMiraclePrivateServerKeywordPage, { generateMetadata } from './with-discord-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiraclePrivateServerKeywordPage />;
}
