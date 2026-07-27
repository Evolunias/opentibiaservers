import WithDiscordNilotRulesKeywordPage, { generateMetadata } from './with-discord-nilot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotRulesKeywordPage />;
}
