import WithDiscordCarlinotPrivateServerKeywordPage, { generateMetadata } from './with-discord-carlinot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotPrivateServerKeywordPage />;
}
