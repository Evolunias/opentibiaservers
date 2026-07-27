import WithDiscordCyntaraServerKeywordPage, { generateMetadata } from './with-discord-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraServerKeywordPage />;
}
