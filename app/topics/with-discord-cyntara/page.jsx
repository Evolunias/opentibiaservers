import WithDiscordCyntaraKeywordPage, { generateMetadata } from './with-discord-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraKeywordPage />;
}
