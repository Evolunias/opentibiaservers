import WithDiscordLumineraPrivateServerKeywordPage, { generateMetadata } from './with-discord-luminera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraPrivateServerKeywordPage />;
}
