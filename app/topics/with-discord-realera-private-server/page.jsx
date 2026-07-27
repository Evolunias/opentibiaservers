import WithDiscordRealeraPrivateServerKeywordPage, { generateMetadata } from './with-discord-realera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealeraPrivateServerKeywordPage />;
}
