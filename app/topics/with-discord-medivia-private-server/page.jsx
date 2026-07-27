import WithDiscordMediviaPrivateServerKeywordPage, { generateMetadata } from './with-discord-medivia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaPrivateServerKeywordPage />;
}
