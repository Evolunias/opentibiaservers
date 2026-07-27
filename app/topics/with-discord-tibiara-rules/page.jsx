import WithDiscordTibiaraRulesKeywordPage, { generateMetadata } from './with-discord-tibiara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiaraRulesKeywordPage />;
}
