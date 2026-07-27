import WithDiscordMiracleServerKeywordPage, { generateMetadata } from './with-discord-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleServerKeywordPage />;
}
