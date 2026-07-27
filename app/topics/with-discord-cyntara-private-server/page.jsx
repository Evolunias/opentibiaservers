import WithDiscordCyntaraPrivateServerKeywordPage, { generateMetadata } from './with-discord-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraPrivateServerKeywordPage />;
}
