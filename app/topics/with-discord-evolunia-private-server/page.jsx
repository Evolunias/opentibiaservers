import WithDiscordEvoluniaPrivateServerKeywordPage, { generateMetadata } from './with-discord-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordEvoluniaPrivateServerKeywordPage />;
}
