import WithDiscordCyntaraClientKeywordPage, { generateMetadata } from './with-discord-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraClientKeywordPage />;
}
