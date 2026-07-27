import WithDiscordOlderaRulesKeywordPage, { generateMetadata } from './with-discord-oldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaRulesKeywordPage />;
}
