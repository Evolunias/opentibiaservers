import WithDiscordRubinotRulesKeywordPage, { generateMetadata } from './with-discord-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotRulesKeywordPage />;
}
