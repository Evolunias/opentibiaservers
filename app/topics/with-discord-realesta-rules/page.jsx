import WithDiscordRealestaRulesKeywordPage, { generateMetadata } from './with-discord-realesta-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaRulesKeywordPage />;
}
