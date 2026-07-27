import WithDiscordYurotsRulesKeywordPage, { generateMetadata } from './with-discord-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsRulesKeywordPage />;
}
