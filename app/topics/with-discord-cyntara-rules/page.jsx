import WithDiscordCyntaraRulesKeywordPage, { generateMetadata } from './with-discord-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraRulesKeywordPage />;
}
