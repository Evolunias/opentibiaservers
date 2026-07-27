import WithDiscordThaisotRulesKeywordPage, { generateMetadata } from './with-discord-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThaisotRulesKeywordPage />;
}
