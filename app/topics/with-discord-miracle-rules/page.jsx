import WithDiscordMiracleRulesKeywordPage, { generateMetadata } from './with-discord-miracle-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMiracleRulesKeywordPage />;
}
