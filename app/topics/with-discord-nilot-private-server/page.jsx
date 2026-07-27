import WithDiscordNilotPrivateServerKeywordPage, { generateMetadata } from './with-discord-nilot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotPrivateServerKeywordPage />;
}
