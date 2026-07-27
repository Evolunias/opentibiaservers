import WithDiscordCyntaraOtsKeywordPage, { generateMetadata } from './with-discord-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraOtsKeywordPage />;
}
