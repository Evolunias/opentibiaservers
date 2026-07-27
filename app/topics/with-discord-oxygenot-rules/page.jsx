import WithDiscordOxygenotRulesKeywordPage, { generateMetadata } from './with-discord-oxygenot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOxygenotRulesKeywordPage />;
}
