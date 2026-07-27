import WithDiscordThaisotPrivateServerKeywordPage, { generateMetadata } from './with-discord-thaisot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotPrivateServerKeywordPage />;
}
