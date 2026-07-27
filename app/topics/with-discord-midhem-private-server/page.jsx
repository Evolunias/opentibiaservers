import WithDiscordMidhemPrivateServerKeywordPage, { generateMetadata } from './with-discord-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemPrivateServerKeywordPage />;
}
